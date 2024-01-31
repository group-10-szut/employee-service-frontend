import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  // mit BehaviorSubject und Observable ist sichergestellt, dass jede Komponente,
  // die diesen Service nutzt, den aktuellen Wert erhält
  private employeeFormStatus = new BehaviorSubject(false);
  private employeeCreated = new BehaviorSubject(null);
  isEmployeeFormShowed = this.employeeFormStatus.asObservable();
  isEmployeeCreated = this.employeeCreated.asObservable();

  private qualificationFormStatus = new BehaviorSubject<boolean>(false);
  private qualificationCreated = new BehaviorSubject(null);
  isQualificationFormShowed = this.qualificationFormStatus.asObservable();
  isQualificationCreated = this.qualificationCreated.asObservable();

  // ändert den Wert des Observables
  changeShowEmployeeForm(show: boolean) {
    this.employeeFormStatus.next(show);
  }

  // ändert den Wert des Observables
  changeShowQualificationForm(show: boolean) {
    this.qualificationFormStatus.next(show);
  }

  triggerQualificationCreated() {
    this.qualificationCreated.next(null);
  }

  triggerEmployeeCreated() {
    this.employeeCreated.next(null);
  }
}
