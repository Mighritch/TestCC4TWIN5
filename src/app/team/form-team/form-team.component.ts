import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent {
  teamForm: FormGroup;
  participants: string[] = [];
  participant: string = '';

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      level: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      projectDescription: ['', [Validators.minLength(5)]],
    });
  }

  addParticipant() {
    if (this.participant.trim()) {
      this.participants.push(this.participant.trim());
      this.participant = '';
    }
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const newTeam = {
        ...this.teamForm.value,
        participants: this.participants
      };
      console.log(newTeam);
    }
  }
}
