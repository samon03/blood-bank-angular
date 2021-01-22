import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  onFeedback(form: NgForm) {
    this.feedbackService.postfeedback(form.value).subscribe(fb => {
      this.getFeedbacks();
    });
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(feedback => {
      this.feedback = feedback;
    });
  }
}
