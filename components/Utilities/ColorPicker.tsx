import { FC, useState } from 'react';
import { Form, Popover } from 'antd';
import { SketchPicker } from 'react-color';

const presetColors = [
  '#34D399',
  '#3B82F6',
  '#EF4444',
  '#FCD34D',
  '#A78BFA',
  '#6B7280',
  '#F59E0B',
  '#4F46E5',
  '#065F46',
  '#EC4899',
  '#93C5FD',
  '#111827',
];

const ColorPicker: FC<{ label: string }> = ({ label }) => {
  const [color, setColor] = useState('#34D399');

  return (
    <Form.Item label={label}>
      <Popover
        content={
          <SketchPicker
            color={color}
            disableAlpha={true}
            presetColors={presetColors}
            onChange={({ hex }) => setColor(hex)}
          />
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
