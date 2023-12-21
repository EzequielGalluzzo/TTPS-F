import { Component } from '@angular/core';

import { User } from '../_models/users';
import { AccountService } from '../_services/account.service';

@Component({ templateUrl: 'home.html' })
export class HomeComponent {
    user: User | null;
    
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        
       
    }
}