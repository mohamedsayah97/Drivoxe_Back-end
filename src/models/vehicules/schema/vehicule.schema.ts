import { getModelForClass, prop } from "@typegoose/typegoose";

export class Vehicule {
  @prop({ type: String, required: true, trim: true })
  brand: string;

  @prop({ type: String, required: true, trim: true })
  model: string;

  @prop({ type: Number, required: true, min: 1900, max: new Date().getFullYear() })
  year: number;

  @prop({ type: String, required: true, trim: true })
  color: string;

  @prop({ type: String, required: true, trim: true })
  license_plate: string;

  @prop({ type: Number, required: true, min: 0 })
  price_per_day: number;

  @prop({
    type: String,
    required: true,
    enum: ["disponible", "non disponible"], 
    default: "disponible" 
})
status: "disponible" | "non disponible"; 

  @prop({ type: String, required: true, trim: true })
  fuel_type: string; // 'essence', 'diesel', 'electrique', 'hybride'

  @prop({ type: Number, required: true, min: 0 })
  seat_count: number;

  @prop({ type: [String], required: true })
  features: string[]; // ['climatisation', 'gps', 'bluetooth', etc.]

  @prop({ type: String, trim: true })
  image_url?: string;
}

const VehiculeModel = getModelForClass(Vehicule);
export default VehiculeModel;







