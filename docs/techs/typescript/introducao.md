# Introdução a TypeScript

---

```typescript
export interface Course {
	name: string;
	semester: string;
	ra: string;
}

export interface Student {
	depression: string;
}

export interface IModuleComponent extends Course {
	label: string;
}

export type TypePick = Pick<Course, 'name' | 'semester'>;
export type TypeOmit = Omit<Course, 'name'>;
export type TypeReturn = ReturnType<typeof treatment>;
export type TypePartial = Partial<Course>;
export type TypeUnion = Course & Student;
```
