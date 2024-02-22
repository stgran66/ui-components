import PropTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
  ...rest
}) {
  let classes = className(
    rest.className,
    'px-3 py-1.5 border flex items-center gap-1',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'bg-white': outlined,
      'rounded-full': rounded,
      'text-blue-500': outlined && primary,
      'text-gray-900': outlined && secondary,
      'text-green-500': outlined && success,
      'text-yellow-400': outlined && warning,
      'text-red-500': outlined && danger,
    }
  );

  classes = twMerge(classes);

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkButtonType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning or danger can be true'
      );
    }
  },
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
