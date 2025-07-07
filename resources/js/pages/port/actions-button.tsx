import ButtonAdd from './button-add';
import ButtonDelete from './button-delete';
import ButtonEdit from './button-edit';

const ActionsButton = () => {
    return (
        <div className="flex gap-1">
            <ButtonAdd />
            <ButtonEdit />
            <ButtonDelete />
        </div>
    );
};

export default ActionsButton;
