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
            console.log("?????? ????????? ???????????? ?????????.")

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
            console.log("?????? ?????? ????????????.")
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
                {tableId}??? ????????? ?????? ??????
            </Header>
            <InputsContainer>
                <InputContainer>
                    <Text>
                        ??????
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
                        ???????????????
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
                        <option value="1">1???</option>
                        <option value="2">2???</option>
                        <option value="3">3???</option>
                        <option value="4">4???</option>
                    </SelectorInput>
                </InputContainer>
            </InputsContainer>
            <InputsContainer>
                <InputContainer>
                    <Text>
                        ????????????
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
                    ?????? ??????
                </Button>
                <Button
                    disabled={bookInfo.state === 2}
                    onClick={handleRecordArrival}
                >
                    ?????? ??????
                </Button>
                <Button
                    disabled={bookInfo.state === 2}
                    onClick={handleReservationModification}
                >
                    {
                        modification === 0 ? "?????? ??????" : "?????? ??????"
                    }
                </Button>
            </ButtonContainer>
            <ArraivalInfoContainer>
                <InputContainer>
                    <Text>
                        ????????????
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
