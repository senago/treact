import { useState } from "src/treact/@hooks/useState";

export type Validator = {
	isValid: (value: string) => boolean;
	message: string;
};

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validators<T> = Partial<Record<keyof T, Validator>>;

export const useForm = <T extends Partial<Record<keyof T, any>> = {}>(options: {
	validators?: Validators<T>;
	initialValues?: Partial<T>;
	onSubmit: () => void;
}) => {
	const [data, setData] = useState<T>((options.initialValues || {}) as T);
	const [errors, setErrors] = useState<ErrorRecord<T>>({});

	const handleChange =
		<S>(key: keyof T, sanitizeFn?: (value: string) => S) =>
			(e: InputEvent) => {
				const target = e.target as HTMLInputElement;
				const value = sanitizeFn ? sanitizeFn(target.value) : target.value;
				setData({
					...data,
					[key]: value,
				});
			};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const { validators } = options;
		if (validators) {
			const errors: ErrorRecord<T> = {};
			for (const key in validators) {
				if (validators.hasOwnProperty(key)) {
					const value = data[key] || "";
					const validator = validators[key];
					if (validator && !validator.isValid(value)) {
						errors[key] = validator.message;
					}
				}
			}

			if (Object.keys(errors).length > 0) {
				setErrors(errors);
				return;
			}
		}

		setErrors({});
		options.onSubmit();
	};

	return {
		data,
		errors,
		handleChange,
		handleSubmit,
	};
};
