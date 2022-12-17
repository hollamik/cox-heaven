import CountUp, { useCountUp } from 'react-countup';

const manualStart =>{{
return(
<CountUp start={0} end={100}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>;
);
  }
}
  export default manualStart;