import { useState, useEffect } from "react";

const DeviceMotionComponent = () => {
  const [motionData, setMotionData] = useState<{
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
    rotationRateAlpha: number;
    rotationRateBeta: number;
    rotationRateGamma: number;
  }>({
    accelerationX: 0,
    accelerationY: 0,
    accelerationZ: 0,
    rotationRateAlpha: 0,
    rotationRateBeta: 0,
    rotationRateGamma: 0,
  });

  useEffect(() => {
    const handleMotion = (event: DeviceMotionEvent) => {
      if (event.acceleration && event.rotationRate) {
        setMotionData({
          accelerationX: event?.acceleration.x ?? 0,
          accelerationY: event?.acceleration.y ?? 0,
          accelerationZ: event?.acceleration.z ?? 0,
          rotationRateAlpha: event?.rotationRate.alpha ?? 0,
          rotationRateBeta: event?.rotationRate.beta ?? 0,
          rotationRateGamma: event?.rotationRate.gamma ?? 0,
        });
      }
    };

    window.addEventListener("devicemotion", handleMotion);
  }, []);

  const [orientation, setOrientation] = useState<{
    alpha: number;
    beta: number;
    gamma: number;
  }>({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
        setOrientation({
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma,
        });
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div>
      <h1>Device Motion</h1>
      <p>Acceleration X: {motionData.accelerationX}</p>
      <p>Acceleration Y: {motionData.accelerationY}</p>
      <p>Acceleration Z: {motionData.accelerationZ}</p>
      <p>Rotation Alpha: {motionData.rotationRateAlpha}</p>
      <p>Rotation Beta: {motionData.rotationRateBeta}</p>
      <p>Rotation Gamma: {motionData.rotationRateGamma}</p>
      <p>Orientation Alpha: {orientation.alpha}</p>
      <p>Orientation Beta: {orientation.beta}</p>
      <p>Orientation Gamma: {orientation.gamma}</p>
    </div>
  );
};

export default DeviceMotionComponent;
