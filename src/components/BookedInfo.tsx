import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { cancelReservation, getArrival, modifyReservation, recordArrival } from '../api'
import { ReservationInfoProps } from '../pages/ReserveLook_Table'
import { setRefresh } from '../slice'
import { SelectContainer } from './ModifyListpage_tableComponent'

type BookedInfoProps = {
    tableId: string
    bookInfo: ReservationInfoProps
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

const ArraivalInfoContainer = styled.div`
display:flex;
/* gap:px;/ */
`

export default function BookedInfo({
    tableId, bookInfo, date, time
}: BookedInfoProps) {
    const [arrivelTime, setArriavalTime] = useState('')
    const [modification, setModification] = useState(0)
    const [name, setName] = useState<string>(bookInfo.name);
    const [covers, setCovers] = useState<string>(`${bookInfo.covers}`);
    const [phoneNumber, setPhoneNumber] = useState<string>(bookInfo.phone_number);
    // const [name, setName] = useState<string>(bookInfo.name);
    // const [covers, setCovers] = useState<string>(`${bookInfo.covers}`);
    // const [phoneNumber, setPhoneNumber] = useState<string>(bookInfo.phone_number);

    useEffect(() => {
        setName(bookInfo.name)
        setCovers(`${bookInfo.covers}`)
        setPhoneNumber(bookInfo.phone_number)
    }, [bookInfo])

    const dispatch = useDispatch()
    const handleReservation = () => {
        cancelReservation(`${bookInfo.oid}`).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            dispatch(setRefresh((value: any) => !value))
        })
    }

    const handleRecordArrival = async () => {
        await recordArrival({
            table_id: `${bookInfo.table_id}`,
            date: date,
            time: time
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            dispatch(setRefresh((value: any) => !value))
        })
    }

    const handleReservationModification = async () => {
        if (modification === 0) {
            console.log("예약 수정을 가능하게 합니다.")

        } else if (modification === 1) {
            await modifyReservation({
                oid: `${bookInfo.oid}`,
                date,
                time,
                covers,
                tableId: `${bookInfo.table_id}`,
                name,
                phoneNumber
            }).then(res => {
                console.log(res)
                // dispatch(setRefresh((value: any) => !value))
            })
            console.log("예약 수정 요청완료.")
        }
        setModification((modification + 1) % 2)

    }

    useEffect(() => {
        if (bookInfo.state === 2) {
            getArrival(`${bookInfo.oid}`).then(res => {
                console.log(res.data.result[0])
                setArriavalTime(res.data.result[0].arrival_time)
            }).catch(err => {
                console.log(err)
                setArriavalTime('')
            })
        } else {
            setArriavalTime('')

        }
    }, [bookInfo.oid])

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
                        disabled={!modification}
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <Text>
                        예약인원수
                    </Text>
                    <SelectorInput
                        disabled={!modification}
                        value={covers}
                        onChange={(event) =>
                            setCovers(event.target.value)}
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
                        disabled={!modification}
                        value={phoneNumber}
                        onChange={(event) =>
                            setPhoneNumber(event.target.value)}
                    />
                </InputContainer>
                <Dummy />
            </InputsContainer>
            <ButtonContainer>
                <Button
                    disabled={bookInfo.state === 2}
                    onClick={handleReservation}
                >
                    예약 취소
                </Button>
                <Button
                    disabled={bookInfo.state === 2}
                    onClick={handleRecordArrival}
                >
                    방문 완료
                </Button>
                <Button
                    disabled={bookInfo.state === 2}
                    onClick={handleReservationModification}
                >
                    {
                        modification === 0 ? "예약 수정" : "수정 완료"
                    }
                </Button>
            </ButtonContainer>
            <ArraivalInfoContainer>
                <InputContainer>
                    <Text>
                        도착시간
                    </Text>
                    <TextInput
                        disabled
                        value={arrivelTime}
                    />
                </InputContainer>
                <Dummy />
            </ArraivalInfoContainer>
        </SelectContainer>
    )
}
