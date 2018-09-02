import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var require: any;
const RecordRTC = require('recordrtc/RecordRTC.min');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getAudio = '';
  private stream: MediaStream;
  private recordRTC: any;
  public: HTMLAudioElement;

  @ViewChild('audio') audio;

  constructor() {
    // Do stuff
  }

  // ngAfterViewInit() {
  //   // set the initial state of the audio
  //   const audio: HTMLaudioElement = this.audio.nativeElement;
  //   audio.muted = false;
  //   audio.controls = true;
  //   audio.autoplay = false;
  // }

  // toggleControls() {
  //   let audio: HTMLaudioElement = this.audio.nativeElement;
  //   audio.muted = !audio.muted;
  //   audio.controls = !audio.controls;
  //   audio.autoplay = !audio.autoplay;
  // }

  // successCallback(stream: MediaStream) {

  //   var options = {
  //     mimeType: 'audio/webm', // or audio/webm\;codecs=h264 or audio/webm\;codecs=vp9
  //     audioBitsPerSecond: 128000,
  //     audioBitsPerSecond: 128000,
  //     bitsPerSecond: 128000 // if this line is provided, skip above two
  //   };
  //   this.stream = stream;
  //   this.recordRTC = RecordRTC(stream, options);
  //   this.recordRTC.startRecording();
  //   let audio: HTMLaudioElement = this.audio.nativeElement;
  //   audio.src = window.URL.createObjectURL(stream);
  //   this.toggleControls();
  // }

  // errorCallback() {
  //   //handle error here
  // }

  // processaudio(audioaudioWebMURL) {
  //   let audio: HTMLaudioElement = this.audio.nativeElement;
  //   let recordRTC = this.recordRTC;
  //   audio.src = audioaudioWebMURL;
  //   this.toggleControls();
  //   var recordedBlob = recordRTC.getBlob();
  //   recordRTC.getDataURL(function (dataURL) { });
  // }

  // startRecording() {
  //   let mediaConstraints = {
  //     audio: {
  //       mandatory: {
  //         minWidth: 1280,
  //         minHeight: 720
  //       }
  //     }, audio: true
  //   };
  //   navigator.mediaDevices
  //     .getUserMedia(mediaConstraints)
  //     .then(this.successCallback.bind(this), this.errorCallback.bind(this));


  // }

  // stopRecording() {
  //   let recordRTC = this.recordRTC;
  //   recordRTC.stopRecording(this.processaudio.bind(this));
  //   let stream = this.stream;
  //   stream.getAudioTracks().forEach(track => track.stop());
  //   stream.getaudioTracks().forEach(track => track.stop());
  // }

  // download() {
  //   this.recordRTC.save('audio.webm');
  // }
}
