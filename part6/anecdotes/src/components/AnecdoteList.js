import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter);
  const filterexp = new RegExp(filter, "i");
  const anecdotes = useSelector((state) =>
    filter
      ? state.anecdotes.filter(function (anecdote) {
          return filterexp.test(anecdote.content);
        })
      : state.anecdotes
  );
  const anecdotes1 = [...anecdotes];
  const dispatch = useDispatch();

  return (
    <div>
      {anecdotes1
        .sort((a, b) => (a.votes > b.votes ? -1 : 1))
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(vote(anecdote))}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
