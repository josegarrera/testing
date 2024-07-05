export interface MotionSensor {
  isDetectingMotion(): boolean;
}

export interface VideoRecorder {
  startRecording(): void;
  stopRecording(): void;
}

export class SurveillanceController {
  constructor(
    private motionSensor: MotionSensor,
    private videoRecorder: VideoRecorder
  ) {}

  recordMotion() {
    try {
      this.motionSensor.isDetectingMotion()
        ? this.videoRecorder.startRecording()
        : this.videoRecorder.stopRecording();
    } catch (error) {
      this.videoRecorder.stopRecording();
    }
  }
}
