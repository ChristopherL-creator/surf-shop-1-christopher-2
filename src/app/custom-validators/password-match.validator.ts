import { FormGroup } from "@angular/forms";

export function passwordMatch(group: FormGroup){
  const pswControl = group.get('password'); 
  // prende inout di password
  const pswConfirmControl = group.get('passwordConfirm'); 
  // prende input di password confirm

  if (pswControl?.value === pswConfirmControl?.value) {
    return null;
  } else {
    return {
      pswMatch: false
    }
  }
}
