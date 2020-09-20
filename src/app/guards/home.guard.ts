import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Injectable({
  providedIn: 'root'
})

export class HomeGuard implements CanActivate {
  constructor(private requestServ: RequestService, private router: Router) {}

  canActivate(): boolean {
    return true
  }
}