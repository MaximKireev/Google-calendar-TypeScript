import './Cell.css'

export const HourCell = (props) => {
    let { value } = props;

    let idx = value.indexOf(':');
    return (
      <div
        className="hour-cell-wrapper"
      >
        <span className='time'>{value}</span>
        <div className="quarter-of-an-hour" id = {value}></div>
        <div className="quarter-of-an-hour" id = {value.slice(0, idx+1)+'15'}></div>
        <div className="quarter-of-an-hour" id = {value.slice(0, idx+1)+'30'}></div>
        <div className="quarter-of-an-hour" id = {value.slice(0, idx+1)+'45'}>

        </div>
      </div>
    );
  };
  