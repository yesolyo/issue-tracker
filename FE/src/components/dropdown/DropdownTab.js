import { Button } from '../button/Button';
import {
  tabButtonOption,
  issuePropertiesConstant
} from '../button/buttonConstant';

export const DropdownTab = () => {
  return (
    <div>
      <Button
        {...tabButtonOption}
        buttonText={issuePropertiesConstant.assignee}
      />
      <Button {...tabButtonOption} buttonText={issuePropertiesConstant.label} />
      <Button
        {...tabButtonOption}
        buttonText={issuePropertiesConstant.milestone}
      />
      <Button
        {...tabButtonOption}
        buttonText={issuePropertiesConstant.author}
      />
    </div>
  );
};
