import { FC, useState, useContext } from 'react';
import { Form, Popover } from 'antd';
import { SketchPicker } from 'react-color';
import { NamePath } from 'antd/lib/form/interface';

import colors from 'constants/colors';
import { TemplateFormContext } from '../Templates/organisms/TemplateForm';
import FormMode from 'enums/formMode';

const presetColors = [
  colors.GREEN,
  colors.BLUE,
  colors.RED,
  colors.YELLOW,
  colors.PURPLE,
  colors.GRAY,
  colors.ORANGE,
  colors.INDIGO,
  colors.DARK_GREEN,
  colors.PINK,
  colors.LIGHT_BLUE,
  colors.BLACK,
];

const ColorPicker: FC<{ label: string; name: NamePath; defaultValue: string }> = ({
  label,
  name,
  defaultValue,
}) => {
  const { formMode } = useContext(TemplateFormContext);
  const [color, setColor] = useState(defaultValue);

  return (
    <Form.Item label={label}>
      <Popover
        className={formMode === FormMode.View ? 'pointer-events-none' : ''}
        content={
          <Form.Item
            className="-mx-4 -mb-3 -mt-2.5"
            name={name}
            valuePropName="color"
            normalize={({ hex }: { hex: string }) => hex}
          >
            <SketchPicker
              color={color}
              disableAlpha={true}
              presetColors={presetColors}
              onChange={({ hex }) => setColor(hex)}
            />
          </Form.Item>
        }
        trigger="click"
        placement="bottomLeft"
      >
        <div className="flex justify-center w-12 p-1.5 sm:mt-0.5 bg-white border border-gray-300 rounded-sm shadow cursor-pointer">
          <div className="h-3.5 w-8 rounded-sm" style={{ backgroundColor: color }}></div>
        </div>
      </Popover>
    </Form.Item>
  );
};

export default ColorPicker;
