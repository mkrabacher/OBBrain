import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-brain',
    templateUrl: './brain.component.html',
    styleUrls: ['./brain.component.css']
})
export class BrainComponent implements OnInit {
    loggedUser;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        // turn this on to use log reg again.
            // if (this._httpService.retrieveLogUser() == null) {
            //     this._router.navigate(['/log-reg']);
            // } else {
            //     this.loggedUser = this._httpService.retrieveLogUser();
            //     this._router.navigate(['/brain/brain-display']);
            // }
        //
        // turn this on and above off to auto log in.
            const autoLogin = {
                email: 'm@k.com',
                password: 'Aa121212'
            };
            const observable = this._httpService.login(autoLogin);
            observable.subscribe(data => {
                console.log(data);
                if (data['loggedUser']) {
                    this.loggedUser = data['loggedUser'];
                    this._httpService.setLogUser(this.loggedUser);
                }
            });
        //

    }

}
