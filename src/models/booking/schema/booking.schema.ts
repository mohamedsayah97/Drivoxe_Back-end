import { getModelForClass, prop } from "@typegoose/typegoose";

export class Booking {
  @prop({ type: String, required: true, ref: 'User' })
  user_id: string; // Référence à l'ID d'un utilisateur

  @prop({ type: String, required: true, ref: 'Vehicule' })
  vehicule_id: string; // Référence à l'ID d'un véhicule

  @prop({ type: Date, required: true })
  start_date: Date;

  @prop({ type: Date, required: true })
  end_date: Date;

  @prop({ type: Number, required: true, min: 0 })
  total_price: number;

  @prop({ 
    type: String, 
    required: true, 
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  })
  status: string;

  @prop({ type: Date, required: true, default: Date.now })
  created_at: Date;

  @prop({ type: Date })
  updated_at?: Date;

  @prop({ 
    type: String, 
    enum: ['credit_card', 'paypal', 'cash', 'bank_transfer'],
    trim: true 
  })
  payment_method?: string;

  @prop({ type: Boolean, default: false })
  is_paid: boolean;

  @prop({ type: Number, min: 0 })
  mileage_before?: number;

  @prop({ type: Number, min: 0 })
  mileage_after?: number;

  @prop({ type: String, trim: true })
  notes?: string; // Notes supplémentaires sur la réservation

  @prop({ type: String, trim: true })
  pickup_location?: string;

  @prop({ type: String, trim: true })
  dropoff_location?: string;

  @prop({ type: Number, min: 0 })
  deposit_amount?: number; // Montant du dépôt de garantie

  @prop({ type: Boolean, default: false })
  deposit_returned: boolean;
}

const BookingModel = getModelForClass(Booking);
export default BookingModel;