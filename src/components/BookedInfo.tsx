import React from 'react'
import styled from 'styled-components'
import { ReservationInfoProps } from '../pages/ReserveLook_Table'
import { SelectContainer } from './ModifyListpage_tableComponent'

type BookedInfoProps = {
    tableId: string
    bookInfo: ReservationInfoProps
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
const SelectorInput = styled.select`
    flex: 4;
`

export default function BookedInfo({
    tableId, bookInfo
}: BookedInfoProps) {
    return (
        <SelectContainer>
            <Header>
                {tableId}번 테이블 예약 정보
            </Header>
            <InputsContainer>
                <InputContainer>
                    <Text>
                        이름
                    </Text>
                    <TextInput
                        disabled
                        value={bookInfo.name}
                    />
                </InputContainer>
                <InputContainer>
                    <Text>
                        예약인원수
                    </Text>
                    <SelectorInput
                        disabled
                        value={bookInfo.covers}
                    // onChange={event => {
                    //     const { value } = event.target;
                    //     console.log(value);
                    // }}
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
                        disabled
                        value={bookInfo.phone_number}
                    />
                </InputContainer>
                <Dummy />
            </InputsContainer>
            <ButtonContainer>
                <Button>
                    예약 취소
                </Button>
                <Button>
                    방문 완료
                </Button>
                <Button>
                    예약 수정
                </Button>
            </ButtonContainer>
        </SelectContainer>
    )
}
