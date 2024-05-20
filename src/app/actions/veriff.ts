import axios, { AxiosResponse } from 'axios';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_VERIFF_BASE_URL;
const token: string | undefined = process.env.NEXT_PUBLIC_VERIFF_API_KEY;

interface Person {
  firstName: string;
  lastName: string;
}

interface Verification {
  person: Person;
  vendorData: string;
}

export const getVeriffLink = async (firstName: string, lastName: string): Promise<any> => {
  if (!baseUrl || !token) throw new Error('Base URL or API token is undefined');
  
  const verification: Verification = {
    person: { firstName, lastName },
    vendorData: '228',
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-AUTH-CLIENT': token,
  };

  const res: AxiosResponse<any> = await axios.post(`${baseUrl}/v1/sessions`, verification, { headers });

  return res.data;
};

export const checkVeriffSession = async (sessionId: string): Promise<any> => {
  if (!baseUrl || !token) throw new Error('Base URL or API token is undefined');

  const headers = {
    'Content-Type': 'application/json',
    'X-AUTH-CLIENT': token,
  };

  const res: AxiosResponse<any> = await axios.get(`${baseUrl}/v1/sessions/${sessionId}/decision`, { headers });

  return res.data;
};
