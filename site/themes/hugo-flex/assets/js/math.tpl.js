{{- $delimiters := slice -}}

{{- range site.Params.mathdelim.block -}}
  {{- $pair := dict "left" (index . 0) "right" (index . 1) "display" true -}}
  {{- $delimiters = $delimiters | append $pair -}}
{{- end }}

{{- range site.Params.mathdelim.inline -}}
  {{- $pair := dict "left" (index . 0) "right" (index . 1) "display" false -}}
  {{- $delimiters = $delimiters | append $pair -}}
{{- end -}}

renderMathInElement(document.body, { delimiters: {{ jsonify $delimiters }} });
