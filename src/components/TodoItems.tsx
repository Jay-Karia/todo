import { memo } from "react";

interface TodoItems {
    action: any;
    state: string;
    toggleStatus: any;
    removeItem: any;
    UpdateList: any;
}

const TodoItems = memo(
    ({ action, state, toggleStatus, UpdateList, removeItem }: TodoItems) => {
        return action.filter(state).map((v: any) => (
            <ul
                className=" w-full border-2 border-white"
                style={{ listStyleType: "none" }}
            >
                <div
                    key={v.id}
                    className="w-full h-16 border-2 boreder-white flex items-center justify-between"
                >
                    <button
                        className="w-16 h-16 border-2 border-white flex justify-center items-center"
                        onClick={() => toggleStatus(v.id, v.status)}
                    >
                        <div
                            style={{
                                backgroundColor:
                                    v.status === "completed"
                                        ? "green"
                                        : "transparent",
                            }}
                            className="w-6 h-6 rounded-full border-4 border-green-700"
                        ></div>
                    </button>
                    <li
                        contentEditable="true"
                        onBlur={(e: any) => UpdateList(v.id, e)}
                        style={{
                            textDecoration:
                                v.status === "completed"
                                    ? "line-through"
                                    : "none",
                            color: v.status === "completed" ? "gray" : "white",
                        }}
                    >
                        {v.value}
                    </li>
                    <button
                        className="w-16 h-16 text-red-500 border-2 border-white"
                        onClick={() => removeItem(v)}
                    >
                        x
                    </button>
                </div>
            </ul>
        ));
    }
);
export { TodoItems };
