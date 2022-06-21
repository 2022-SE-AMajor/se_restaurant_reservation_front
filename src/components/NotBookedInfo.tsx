import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { makeReservation, recordArrival } from '../api';
import { setRefresh } from '../slice';
import { SelectContainer } from './ModifyListpage_tableComponent'


type NotBookedInfo = {
  tableId: string;
  date: string;
  time: string;
}



const Title = styled.span``
const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`
const InputsContainer = styled.div`
display:flex;
flex-direction:row;
gap:30px;
`
const InputContainer = styled.div`
flex:1;
display:flex;
flex-direction:row;
justify-content:space-between;

`
const Text = styled.span`
    flex: 3;
`
const TextInput = styled.input`
    flex: 4;
`
const SelectorInput = styled.select`
    flex: 4;
`
const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
gap:10px;
`
const Button = styled.button`
    flex:1;
    height:40px;
    font-size:30px;
`
const Dummy = styled.div`
    flex:1;
`
export default function NotBookedInfo({ tableId, date, time }: NotBookedInfo) {
  const [name, setName] = useState('');
  const [covers, setCovers] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch()

  const handleReservation = () => {
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    console.log(phoneNumber)
    if (name === '') {
      alert('이름을 입력해주세요')
      return;
    } else if (regPhone.test(phoneNumber) === false) {
      alert('전화번호를 올바로 입력해주세요')
      return;
    } else {
      console.log('올바른 입력입니다.')
    }
    makeReservation({
      tableId,
      date,
      time,
      name,
      covers: `${covers}`,
      phoneNumber,
    }).then(res => {
      console.log("으악")
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      dispatch(setRefresh((value: any) => !value))
    })
  }

  const handleReservationAndArrival = () => {
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    console.log(phoneNumber)
    if (name === '') {
      alert('이름을 입력해주세요')
      return;
    } else if (regPhone.test(phoneNumber) === false) {
      alert('전화번호를 올바로 입력해주세요')
      return;
    } else {
      console.log('올바른 입력입니다.')
    }
    makeReservation({
      tableId,
      date,
      time,
      name,
      covers: `${covers}`,
      phoneNumber,
    }).then(res => {
      recordArrival({ table_id: tableId, date, time })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      dispatch(setRefresh((value: any) => !value))
    })
  }

  let nowDate = new Date()
  let YYMMDD = date.split('-').map(t => parseInt(t));
  let HHMM = time.split(':').map(t => parseInt(t));
  let tableDate = new Date(YYMMDD[0], YYMMDD[1] - 1, YYMMDD[2], HHMM[0], HHMM[1], 0)

  console.log('???',);
  const outdated = nowDate.getTime() > tableDate.getTime();

  return (
    <SelectContainer>
      <Header>
        {tableId}번 테이블 예약 하기
      </Header>
      <InputsContainer>
        <InputContainer>
          <Text>
            이름
          </Text>
          <TextInput
            disabled={outdated}
            value={name}
            onChange={event => {
              const { value } = event.target;
              setName(value)
            }}
          />
        </InputContainer>
        <InputContainer>
          <Text>
            예약인원수
          </Text>
          <SelectorInput
            disabled={outdated}
            value={covers}
            onChange={event => {
              const { value } = event.target;
              setCovers(parseInt(value))
            }}
          >
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </SelectorInput>
        </InputContainer>
      </InputsContainer>
      <InputsContainer>
        <InputContainer>
          <Text>
            전화번호
          </Text>
          <TextInput
            disabled={outdated}
            value={phoneNumber}
            onChange={event => {
              const { value } = event.target;
              setPhoneNumber(value)
            }}
          />
        </InputContainer>
        <Dummy />
      </InputsContainer>
      <ButtonContainer>
        <Button
          onClick={handleReservation}
        >
          예약 하기
        </Button>
        <Button
          onClick={handleReservationAndArrival}
        >
          현장 방문
        </Button>
      </ButtonContainer>
    </SelectContainer>
  )
}
