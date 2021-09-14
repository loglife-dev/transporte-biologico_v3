import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { Hub } from "../../../../hub/infra/typeorm/entities/Hub";
@Entity('budget')
class Budget {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'customer_id' })
    @ManyToOne(() => Customer)
    customerId: Customer;

    @Column()
    customer_id: string;

    @JoinColumn({ name: 'source_hub_id' })
    @OneToOne(() => Hub)
    hubId: Hub;

    @Column()
    source_hub_id: string;

    @JoinColumn({ name: 'destination_hub_id' })
    @OneToOne(() => Hub)

    @Column()
    destination_hub_id: string;

    @Column("int", {
        array: true
    })
    source_cities: Number[];

    @Column("int", {
        array: true
    })
    destination_cities: Number[];

    @Column()
    source_address_qty: Number;

    @Column()
    destination_address_qty: Number;

    @Column()
    deadline: Number;

    @Column()
    service_type: string;

    @Column()
    franchising: Number;

    @Column()
    modal: string;

    @Column()
    vehicle: string;

    @Column()
    caixa_termica: Number;

    @Column()
    embalagem_secundaria: Number;

    @Column()
    gelo_seco: Number;

    @Column()
    gelox: Number;

    @Column()
    isopor3l: Number;

    @Column()
    isopor7l: Number;

    @Column()
    terciaria3l: Number;

    @Column()
    terciaria8l: Number;

    @Column()
    price: Number;

    @Column()
    price_kg_extra: Number;

    @Column()
    transfer_budget: Number;

    @Column()
    price_add_collect: Number;

    @Column()
    price_add_delivery: Number;

    @Column()
    price_unsuccessful_collect: Number;

    @Column()
    observation: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Budget }