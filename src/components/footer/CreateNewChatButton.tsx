import useAppDispatch from '../../hooks/useAppDispatch';
import { setHomeContent } from '../../local-states/slices/uiSlice';
const CreateNewChatButton = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="absolute bottom-4 right-3">
      <button onClick={() => dispatch(setHomeContent("NewChat"))} className="bg-black flex items-center justify-center text-white px-4 py-3 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <p className="text-sm">New Chat</p>
      </button>
    </div>
  );
};

export default CreateNewChatButton;
