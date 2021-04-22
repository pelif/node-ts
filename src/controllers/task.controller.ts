import * as express from 'express'; 
import TaskService from '../services/task.service';

export default class TaskControlller {
    
    public router = express.Router();
    public path = '/tasks'; 
    public taskService : TaskService;

    constructor() {
        this.taskService = new TaskService();
        this.setupRoutes();        
    }

    public setupRoutes() {
        this.router.get(`${this.path}`, this.taskService.findAll); 
        this.router.post(`${this.path}`, this.taskService.create); 
    }
   
}

