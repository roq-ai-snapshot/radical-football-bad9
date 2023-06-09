import { ParentRequestInterface } from 'interfaces/parent-request';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  position: string;
  date_of_birth: Date | string;
  height: number;
  weight: number;
  created_at?: Date | string;
  updated_at?: Date | string;
  parent_request?: ParentRequestInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent_request?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  position?: string;
}
