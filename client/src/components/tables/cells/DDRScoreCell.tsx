import { ChangeOpacity } from "util/color-opacity";
import React from "react";
import { integer } from "tachi-common";

export default function DDRScoreCell({
	score,
	colour,
	grade,
	scoreRenderFn,
}: {
	score?: integer;
	grade: string;
	colour: string;
	showScore?: boolean;
	scoreRenderFn?: (s: number) => string;
}) {
	return (
		<td
			style={{
				backgroundColor: ChangeOpacity(colour, 0.2),
			}}
		>
			<strong>{grade}</strong>
			<br />
			{score !== undefined && <>{scoreRenderFn ? scoreRenderFn(score) : score}</>}
		</td>
	);
}