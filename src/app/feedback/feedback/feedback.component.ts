import { Component, OnInit } from '@angular/core';
import {FeedbackService} from './feedback-service/feedback.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  userSatisfactionList: any[] = [
    {
      emoji: '🤔',
      message: ''
    },
    {
      emoji: '😕',
      message: ''
    },
    {
      emoji: '🙂',
      message: ''
    },
    {
      emoji: '😍',
      message: ''
    }
  ];
  selectedEmoji: any = null;
  feedbackText = '';

  constructor(private feedbackService: FeedbackService,
              private router: Router) { }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.selectedEmoji || this.feedbackText) {
      this.feedbackService.submitFeedback({
        emoji: this.selectedEmoji?.emoji,
        message: this.feedbackText
      });
      this.router.navigateByUrl('');
    }
  }

  openHomePage(): void {
    this.router.navigateByUrl('home');
  }
}
