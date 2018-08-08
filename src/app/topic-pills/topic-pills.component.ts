import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  moduleId;
  lessonId;
  courseId;
  topicId;
  topics = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopics(this.courseId, this.moduleId,this.lessonId);
  }

  loadTopics(courseId, moduleId, lessonId) {
    this.lessonId = lessonId;
    this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
      .then(topics => this.topics = topics);
  }

  ngOnInit() {
  }

}
