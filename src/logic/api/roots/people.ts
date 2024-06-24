import {ICharacterResponse} from '../../models/ICharacter';
import {APIClient, isAPIError} from '../axios/client';
import {ServerError, UnknownError} from '../../models/AppError';

export const APIGetPeople = async (page?: number) => {
  try {
    const response = await APIClient.get<ICharacterResponse>('people', {
      params: {
        page,
      },
    });
    return response.data;
  } catch (e: any) {
    if (isAPIError(e)) {
      throw new ServerError(e.message);
    }
    throw new UnknownError(e.message);
  }
};
