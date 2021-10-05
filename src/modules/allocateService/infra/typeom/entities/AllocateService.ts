import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid'

@Entity('allocateService')
class AllocateService {
    @PrimaryColumn()
    id: string;

    @JoinTable({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service

    @Column()
    service_id: string;

    @Column()
    allocated_filight: string;

    @Column()
    availability_date: Date;

    @Column()
    availability_hour: Date;

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

export { AllocateService }