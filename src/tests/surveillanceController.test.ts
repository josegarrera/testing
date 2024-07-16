import {
  MotionSensor,
  VideoRecorder,
  SurveillanceController,
} from '../core/surveillanceController';

let motionSensor: MotionSensor;
let videoRecorder: VideoRecorder;
let controller: SurveillanceController;
describe('Video Surveillance Controller', () => {
  beforeEach(() => {
    motionSensor = new FakeSensorDetectingMotion();
    videoRecorder = new FakeVideoRecorder();
    controller = new SurveillanceController(
      motionSensor,
      videoRecorder
    );
  });
  it('asks the recorder to stop recording when the sensor detects no motion', () => {
    const stubMotionSensor = jest.spyOn(
      motionSensor,
      'isDetectingMotion'
    );
    stubMotionSensor.mockImplementation(() => false);
    const spyVideoRecorder = jest.spyOn(
      videoRecorder,
      'stopRecording'
    );

    controller.recordMotion();

    expect(spyVideoRecorder).toHaveBeenCalled();
  });

  it('asks the recorder to start recording when the sensor detects motion', () => {
    const stubMotionSensor = jest.spyOn(
      motionSensor,
      'isDetectingMotion'
    );
    stubMotionSensor.mockImplementation(() => true);
    const spyVideoRecorder = jest.spyOn(
      videoRecorder,
      'startRecording'
    );

    controller.recordMotion();

    expect(spyVideoRecorder).toHaveBeenCalled();
  });

  it('asks the recorder to stop recording when the sensor throws an unexpected error', () => {
    const stubMotionSensor = jest.spyOn(
      motionSensor,
      'isDetectingMotion'
    );
    stubMotionSensor.mockImplementation(() => {
      throw new Error('unexpected error');
    });
    const spyVideoRecorder = jest.spyOn(
      videoRecorder,
      'stopRecording'
    );

    controller.recordMotion();

    expect(spyVideoRecorder).toHaveBeenCalled();
  });

  it('checks the motion sensor state every second', () => {
    jest.useFakeTimers();
    const spyMotionSensor = jest.spyOn(
      motionSensor,
      'isDetectingMotion'
    );
    controller.start();
    jest.advanceTimersByTime(1000);
    expect(spyMotionSensor).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(spyMotionSensor).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(5000);
    expect(spyMotionSensor).toHaveBeenCalledTimes(7);
  });
});

class FakeSensorDetectingMotion implements MotionSensor {
  isDetectingMotion(): boolean {
    return true;
  }
}

class FakeVideoRecorder implements VideoRecorder {
  startRecording(): void {}
  stopRecording(): void {}
}
