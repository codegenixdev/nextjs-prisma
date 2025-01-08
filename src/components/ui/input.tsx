import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  control: Control<T, any>;
} & ComponentProps<"input">;

const Input = <T extends FieldValues>({
  name,
  className,
  type,
  label,
  control,
  ...props
}: InputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <input
              type={type}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
              )}
              {...props}
              {...field}
            />
          </FormControl>
          {!!error && <FormDescription>{error.message}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
Input.displayName = "Input";

export { Input };
