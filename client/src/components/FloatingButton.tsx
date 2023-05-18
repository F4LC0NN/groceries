import { STYLES } from "@utils/floatingButtonUtils";

export default function FloatingBar({
    handler,
}: {
    handler?: () => void | (() => {});
}) {
    return (
        <button className={STYLES.button} onClick={handler}>
            <p className={STYLES.buttonText}>+</p>
        </button>
    );
}
