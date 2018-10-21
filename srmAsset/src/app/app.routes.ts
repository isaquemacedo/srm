import {Routes} from '@angular/router';

import { ManagementComponent } from './management/management.component';
import { AccountDigitalComponent } from './account-digital/account-digital.component';
import { ReceivablesComponent } from './receivables/receivables.component';

export const ROUTES: Routes = [
  { path: '', component: ManagementComponent },
  { path: 'account-digital', component: AccountDigitalComponent },
  { path: 'receivables', component: ReceivablesComponent }
]
