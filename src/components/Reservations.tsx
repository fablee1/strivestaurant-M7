import { useEffect, useState } from "react"
import { Container, Col, Row, ListGroup } from "react-bootstrap"
import Loading from "./Loading"
import Error from "./Error"
import ReservationForm from "./ReservationForm"
import Reservation from "../types/Reservation"

const Reservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://striveschool.herokuapp.com/api/reservation")
        if (response.ok) {
          const newReservations = (await response.json()) as Reservation[]
          setReservations(newReservations)
        } else {
          setIsError(true)
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    getData()
  }, [])
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h3>RESERVATIONS:</h3>
          {isLoading && <Loading />}
          {isError && <Error />}
          {reservations.length === 0 && isLoading === false && isError === false ? (
            <p>NO RESERVATIONS</p>
          ) : (
            <ListGroup>
              {reservations.map((reservation) => (
                <ListGroup.Item key={reservation._id}>{reservation.name}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <ReservationForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Reservations
