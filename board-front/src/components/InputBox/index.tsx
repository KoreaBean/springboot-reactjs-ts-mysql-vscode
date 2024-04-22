import {ChangeEvent, Dispatch,SetStateAction,forwardRef} from 'react'
import './style.css';

interface Props {
  label : string,
  type : 'text' | 'password';
  placeholder : string;
  value : string;
  setValue : Dispatch<SetStateAction<string>>
  error : boolean;

}

//          component : InputBox 컴포넌트
const InputBox = forwardRef<HTMLInputElement,Props>((props : Props,ref) => {

const {label, type,error, placeholder, value, setValue} = props;

const onChangeHandler = (event : ChangeEvent<HTMLInputElement) => {

  const value = event.target.value
  setValue(value);
}




  return (
    <div className='inputbox'>
      <div className='inputbox-lable'>{label}</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input type={type} className='input'placeholder={placeholder} value={value} onChange={onChangeHandler} />
        <div className='icon-button'>
          <div className='icon eye-light-off-icon'></div>
        </div>
      </div>
      <div className='inputbox-message'>{'비밀번호를 8자이상 입력해주세요.'}</div>

    </div>
  )
})

export default InputBox;