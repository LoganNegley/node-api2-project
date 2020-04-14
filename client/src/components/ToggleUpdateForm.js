import React, {useState} from 'react';


function ToggleUpdateForm(props) {
const [toggle, setToggle] = useState('off');

const switchToggle = () => {
setToggle(toggle === 'off' ? 'on' : 'off')
};

  return (
      <div className={`toggleSwitch ${toggle}`} onClick={switchToggle}>

      </div>
  );
}

export default ToggleUpdateForm;