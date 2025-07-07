import ButtonCreate from './button-create';
import ButtonDelete from './button-delete';
import ButtonEdit from './button-edit';

const ActionButton = () => {
    return (
        <div className="flex gap-2">
            {/* <ButtonAdd /> */}
            <ButtonCreate />
            <ButtonEdit />
            <ButtonDelete />
        </div>
    );
};

export default ActionButton;
