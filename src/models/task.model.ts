import mongoose, {Schema, Document, ObjectId} from 'mongoose'; 

export interface ITask extends Document {
    title: String;
};

export interface ITaskObj extends Document {
    _id: ObjectId, 
    title: String   
}; 

const TaskSchema: Schema = new Schema({   
    title: String
}); 

export default mongoose.model<ITaskObj>('Task', TaskSchema); 


