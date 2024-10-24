import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customer-repository";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {}

  async find(id: string): Promise<Customer> {}

  async findAll(): Promise<Customer[]> {}

  async update(entity: Customer): Promise<void> {}
}
