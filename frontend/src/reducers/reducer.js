import { NEW_TODO, UPDATE_INPUT, TOGGLE_TODO} from '../constants/ActionTypes';


const initialState = {
  input: '',
  todos: [
    {
      text: 'My first todo',
      done: true,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.text,
      };
    case NEW_TODO:
      return {
        ...state,
        todos: [
          {
            text: action.text,
            done: false,
          },
          ...state.todos,
        ],
      };
case TOGGLE_TODO:
    state['todos']=state['todos'].map((t, index)=>
     {
       if(index!=action.id)
       {
         return t;
       }
       let obj = Object.assign({}, t, {
         done: !t.done
      })
      return obj;
     });
     return {
       ...state,
       todos: [
         ...state.todos,
       ],
     };
    default:
      return state;
  }
}
