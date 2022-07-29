import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  TheGraphContract,
  CarCreated,
  CarSold,
  ClientAdded,
  ClientAgeUpdated,
  ClientDeleted,
  ClientNameUpdated,
  ClientSurnameUpdated,
  FundsDeposited,
  FundsWithdrawn
} from "../generated/TheGraphContract/TheGraphContract"
import { Client, Car } from "../generated/schema"

export function handleCarCreated(event: CarCreated): void {
  let car = new Car(Bytes.fromHexString(event.params.carId.toHexString()))
  car.brand = event.params.brand
  car.model = event.params.model
  car.price = event.params.price
  car.save()
}

export function handleCarSold(event: CarSold): void {}

export function handleClientAdded(event: ClientAdded): void {}

export function handleClientAgeUpdated(event: ClientAgeUpdated): void {}

export function handleClientDeleted(event: ClientDeleted): void {}

export function handleClientNameUpdated(event: ClientNameUpdated): void {}

export function handleClientSurnameUpdated(event: ClientSurnameUpdated): void {}

export function handleFundsDeposited(event: FundsDeposited): void {}

export function handleFundsWithdrawn(event: FundsWithdrawn): void {}
