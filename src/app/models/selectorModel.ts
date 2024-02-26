import { IPlanList} from './planModel';
import { IUser} from './userModel';

export interface IStateSelector {
  user: IUser;
  plan: IPlanList;
}
