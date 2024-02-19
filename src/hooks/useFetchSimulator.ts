import { useState } from 'react';

interface ResponseFunctionFetchProps<T> {
  ok: boolean;
  data: T;
}

export interface FetchRequestProps<T> {
  dataSimulate: T;
  typeSimulate: 'success' | 'error';
}

interface FetchSimulatorResponse {
  loading: boolean;
  fetchSimulator: <T>(
    props: FetchRequestProps<T>
  ) => Promise<ResponseFunctionFetchProps<T>>;
  fakeCall: <T>(path: string, values?: T) => Promise<void>;
}

const useFetchSimulator = (): FetchSimulatorResponse => {
  const [loading, setLoading] = useState(false);

  const fetchSimulator = async <T>({
    dataSimulate,
    typeSimulate
  }: FetchRequestProps<T>): Promise<ResponseFunctionFetchProps<T>> => {
    setLoading(true);
    try {
      const response = await new Promise<ResponseFunctionFetchProps<T>>(
        (resolve, reject) => {
          setTimeout(() => {
            if (typeSimulate === 'success') {
              resolve({ ok : true, data : dataSimulate });
            } else {
              reject({ ok : false, data : null });
            }
          }, 2000);
        }
      );
      return response;
    } finally {
      setLoading(false);
    }
  };

  const fakeCall = (path: string): Promise<void> => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve(console.log(`Fake call to ${path}`));
      }, 1000);
    });
  };

  return { loading, fetchSimulator, fakeCall };
};

export default useFetchSimulator;
